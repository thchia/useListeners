'use strict'
let { useEffect } = require('react')

function validateEvt(evts) {
  if (!Array.isArray(evts)) {
    throw new Error('evts must be an array')
  }
}

function isValidNode(node) {
  return node && node.current
}

function useListeners(node, evts = []) {
  useEffect(() => {
    if (isValidNode(node)) {
      evts.forEach(evt => {
        try {
          validateEvt(evt)
          node.current.addEventListener(...evt)
        } catch (e) {
          // Handle/warn/inform skipped
        }
      })
    }
    return () => {
      if (isValidNode) {
        evts.forEach(evt => {
          try {
            validateEvt(evt)
            node.current.removeEventListener(...c)
          } catch (e) {
            // Handle/warn/inform skipped
          }
        })
      }
    }
  }, [])
}

module.exports = useListeners
