import { useNotification } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    window.$notification = useNotification()
    return () => null
  },
})
