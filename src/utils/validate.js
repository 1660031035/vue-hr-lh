/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUserMobile(str) {
  return /^1[3,9]\d{9}$/.test(str)
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
}
