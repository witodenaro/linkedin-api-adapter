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
  import LinkedInAPIAdapter from "../../dist"

  const handleClick = () => {
  }
</script>

<div>
  <div style="background-color: white; padding: 40px;">
    <button on:click={handleClick}
      >A lie is a very poor way to say hello</button>
  </div>
</div>
