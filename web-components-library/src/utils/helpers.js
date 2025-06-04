// filepath: /web-components-library/web-components-library/src/utils/helpers.js

// Utility functions for web components library

/**
 * Formats a date to a readable string.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date) {
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Generates a unique ID.
 * @returns {string} - A unique ID string.
 */
export function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

/**
 * Adds an event listener to an element.
 * @param {Element} element - The DOM element to attach the listener to.
 * @param {string} event - The event type (e.g., 'click').
 * @param {Function} handler - The function to call when the event occurs.
 */
export function addEventListener(element, event, handler) {
    if (element && element.addEventListener) {
        element.addEventListener(event, handler);
    }
}