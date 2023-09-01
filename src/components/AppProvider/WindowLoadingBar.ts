import { useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    window.$loadingBar = useLoadingBar()
    return () => null
  },
})
