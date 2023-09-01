<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" wh-full>
    <n-dialog-provider>
      <window-dialog />
      <n-notification-provider>
        <window-notification />
        <n-message-provider>
          <window-message />
          <n-loading-bar-provider>
            <window-loading-bar />
            <slot name="default" />
          </n-loading-bar-provider>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN } from "naive-ui";
import WindowDialog from "./WindowDialog";
import WindowLoadingBar from "./WindowLoadingBar";
import WindowMessage from "./WindowMessage";
import WindowNotification from "./WindowNotification";
</script>
<style scoped></style>
