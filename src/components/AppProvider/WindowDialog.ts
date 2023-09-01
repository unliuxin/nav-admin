import { useDialog } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    window.$dialog = useDialog()
    return () => null
  }
})