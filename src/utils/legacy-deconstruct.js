/**
 * 
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 */
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

module.exports = {
    clamp,
};
