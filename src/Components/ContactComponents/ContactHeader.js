import React, { useMemo, useRef } from 'react'
import { useAnimation, motion } from 'framer-motion/dist/framer-motion'
import useAnimateComponent from '../../customs/useAnimateComponent'
const contactHeadVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
}
function ContactHeader() {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <motion.h2
      ref={target}
      variants={contactHeadVariants}
      initial='hidden'
      animate={control}>
      Contacts
    </motion.h2>
  )
}

export default ContactHeader
