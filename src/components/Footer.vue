<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-black border-t border-yellow-500/20 text-gray-400 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center">

            <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z"/></svg>
          </div>
          <span class="font-bold text-yellow-400">BLD TEAM</span>
        </div>
        
        <div class="flex space-x-6">
          <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank" class="hover:text-yellow-400 transition-colors" v-html="social.icon"></a>
        </div>
        <div class="text-sm">
          <p>&copy; {{ new Date().getFullYear() }} BLD TEAM. Tous droits réservés.</p>
          <p>Born to Lead Dragons</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'Twitch', link: '#', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zM15.571 4.714h1.715v5.143H15.57zM4 2v16h5.143v3.429l3.428-3.43H16l4-4V2zm15.143 11.143l-2.857 2.857h-3.428l-2.572 2.572v-2.572H6.286V3.714h12.857z"/></svg>`},
  { name: 'Discord', link: '#', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.222 0H3.778C2.247 0 1 .98 1 2.429v15.238C1 19.123 2.247 20.1 3.778 20.1H18L23 24V2.429C23 .98 21.753 0 20.222 0zM8.333 13.952c-.733 0-1.333-.6-1.333-1.333s.6-1.333 1.333-1.333c.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333zm3.334 0c-.733 0-1.333-.6-1.333-1.333s.6-1.333 1.333-1.333c.733 0 1.333.6 1.333 1.333s-.6 1.333-1.333 1.333zm3.333 0c-.733 0-1.333-.6-1.333-1.333s.6-1.333 1.333-1.333c.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333z"/></svg>`},
  { name: 'Twitter', link: '#', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.561-.666 2.477 0 1.61.82 3.028 2.057 3.847-.76-.025-1.475-.232-2.105-.577v.062c0 2.253 1.605 4.135 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.844 2.308 3.187 4.341 3.224-1.594 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.06 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.403-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/></svg>`}
]
</script>