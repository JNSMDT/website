<script lang="ts">
	import GithubIcon from '$assets/icons/github.svelte';
</script>

<main class="h-screen w-screen bg-sky-300 flex flex-col justify-center items-center">
	<div class="flex justify-center items-center">
		<h1 class="text-6xl font-bold p-8">Hello I'm Jan</h1>
		<a href="https://github.com/JNSMDT">
			<i>
				<GithubIcon class="w-12 fill-slate-800 hover:fill-slate-50" />
			</i>
		</a>
	</div>
	<h2 class="text-3xl w-1/2 text-center">
		I create apps, websites and tools for me, friends and family and for anybody who asks me! I use javascript, python and in the
		near future Go and maybe Rust.
	</h2>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
