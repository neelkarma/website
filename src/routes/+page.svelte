<script lang="ts">
  import { bounce } from "$lib/bounce";
  import NowPlaying from "../components/NowPlaying.svelte";
  import DiscordTag from "../components/DiscordTag.svelte";
</script>

<head>
  <title>iamkneel</title>
</head>

<h4 use:bounce>located somewhere far, far away</h4>
<h4 use:bounce>i like making computers do cool stuff</h4>
<h4 use:bounce>i like listening to music</h4>
<h4 use:bounce>honestly, i like computers in general</h4>
<h4 use:bounce>i like playing video games</h4>
<h3 use:bounce>currently unemployed :&lpar;</h3>
<h2 use:bounce>have fun trying to navigate</h2>
<h2><a href="https://www.github.com/neelkarma" use:bounce>github</a></h2>
<h2>
  <a href="https://www.github.com/neelkarma/website" use:bounce>source</a>
</h2>
<h2><a href="/uses" use:bounce>uses</a></h2>
<DiscordTag />
<NowPlaying />
<h1 use:bounce>iamkneel</h1>
