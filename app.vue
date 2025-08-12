<template>
  <div>
    <NuxtLayout>
      <header>
        <nav>
          <ul style="display: flex; gap: 1rem">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/events">Events</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
