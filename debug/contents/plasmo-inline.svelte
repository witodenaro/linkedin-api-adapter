<script context="module" lang="ts">
  import type {
    PlasmoCSConfig,
    PlasmoGetInlineAnchor,
    PlasmoMountShadowHost
  } from "plasmo"

  export const config: PlasmoCSConfig = {
    matches: ["https://www.linkedin.com/**/*"]
  }

  export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector("body")

  export const mountShadowHost: PlasmoMountShadowHost = ({
    anchor,
    shadowHost
  }) => {
    anchor!.element!.insertBefore(shadowHost!, anchor!.element!.firstChild)
  }
</script>

<script lang="ts">
  import { localStorage, getCurrentUserProfile, searchPeople } from "../../src"
  import type { ProfileElement } from "../../src/requests/getConnectionsCount"

  $: res = null as ProfileElement | null

  const handleClick = async () => {
    const profile = await searchPeople({
      start: 0,
      count: 10,
      keywords: 'Software',
      geoUrns: ['105072130', '90009828']
    });

    console.log(profile)
  }
</script>

<div>
  <div style="background-color: white; padding: 40px;">
    <button on:click={handleClick}>Get count</button>
  </div>
</div>
