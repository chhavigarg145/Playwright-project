"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.decrypt = decrypt;
const crypto_1 = __importDefault(require("crypto"));
const algorithm = 'aes-256-cbc';
const ivLength = 16;
function getKey(secret) {
    return crypto_1.default.scryptSync(secret, 'salt', 32);
}
const defaultSecret = process.env.PASSWORD_SECRET || 'default-secret-key';
function encrypt(text, secret = defaultSecret) {
    const iv = crypto_1.default.randomBytes(ivLength);
    const key = getKey(secret);
    const cipher = crypto_1.default.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}
function decrypt(cipherText, secret = defaultSecret) {
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
    const decipher = crypto_1.default.createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
    return decrypted.toString('utf8');
}
