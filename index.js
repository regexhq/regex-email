/**
 * Expose email regex.
 *
 * Example input:
 *   yo+3@gmail.com
 *   tobi@ferret.com
 *   stack@lebron.technology
 */

module.exports = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
