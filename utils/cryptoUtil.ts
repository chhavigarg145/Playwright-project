import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const ivLength = 16;

function getKey(secret: string): Buffer {
  return crypto.scryptSync(secret, 'salt', 32);
}

const defaultSecret = process.env.PASSWORD_SECRET || 'default-secret-key';

export function encrypt(text: string, secret = defaultSecret): string {
  const iv = crypto.randomBytes(ivLength);
  const key = getKey(secret);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decrypt(cipherText: string, secret = defaultSecret): string {
  if (!cipherText) {
    return '';
  }

  const [ivHex, encryptedHex] = cipherText.split(':');
  if (!ivHex || !encryptedHex) {
    return '';
  }

  const iv = Buffer.from(ivHex, 'hex');
  const encryptedBuffer = Buffer.from(encryptedHex, 'hex');
  const key = getKey(secret);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
  return decrypted.toString('utf8');
}
