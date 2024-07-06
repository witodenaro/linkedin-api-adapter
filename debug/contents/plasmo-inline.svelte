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
  import { localStorage, getProfile } from "../../src"
  import type { ProfileElement } from "../../src/requests/getConnectionsCount"

  $: res = null as ProfileElement | null

  const handleClick = async () => {
    const id = localStorage.getUserId();

    const profile = await getProfile(`urn:li:fsd_profile:${id}`);

    console.log(profile)
  }
</script>

<div>
  <div style="background-color: white; padding: 40px;">
    <button on:click={handleClick}>Get count</button>
  </div>
</div>
