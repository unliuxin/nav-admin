<script setup lang="ts">
import { useMenu } from "@/composables/useMenu";
import { ref } from "vue";

const { menuOptions, expandKeys, updateExpandKeys, currentMenu, updateValue } =
  useMenu();

const collapsed = ref(false);
</script>

<template>
  <n-layout has-sider wh-full>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :width="240"
      :native-scrollbar="false"
      :collapsed="collapsed"
      :collapsed-width="64"
    >
      <n-scrollbar>
        <n-menu
          :options="menuOptions"
          :expanded-keys="expandKeys"
          :on-update:expanded-keys="updateExpandKeys"
          :value="currentMenu"
          :on-update:value="updateValue"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          collapsed-mode="width"
        ></n-menu>
      </n-scrollbar>
    </n-layout-sider>

    <article flex-1 flex flex-col overflow-hidden>
      <header border-b h-12 leading-none>
        <n-space align="center" justify="space-between" :wrap="false" h-12 px-3>
          <n-icon size="24" cursor-pointer @click="collapsed = !collapsed">
            <PanelLeftExpand20Regular v-if="collapsed" />
            <PanelRightExpand20Regular v-else />
          </n-icon>
          <n-avatar
            style="align-content: center"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </n-space>
      </header>
      <section flex-1 overflow-hidden bg="#f5f6fb">
        <router-view v-slot="{ Component, route }">
          <template v-if="Component">
            <component :is="Component" :key="route.path" />
          </template>
        </router-view>
      </section>
    </article>
  </n-layout>
</template>

<style scoped></style>
