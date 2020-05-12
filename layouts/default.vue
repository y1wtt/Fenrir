<template>
  <v-app>
    <div>
      <v-navigation-drawer app v-model="drawer" color="blue-grey lighten-5" bottom clipped>
        <v-list>
          <v-list-item v-for="i in items" :key="i.title" :to="i.url">
            <v-list-item-title>{{i.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="orange darken-1" dark app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="v-list-item--link">
          <span style="font-weight:bold" @click="$router.push('/'); drawer = false">人狼ゲームツール集</span>
        </v-toolbar-title>
      </v-app-bar>
    </div>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>
<script lang="ts" src="@/assets/ts/main.ts" />