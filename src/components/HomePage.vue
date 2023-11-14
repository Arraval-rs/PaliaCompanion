<template>
	<v-card class="card">
        <v-card-title class="card-title">
            Welcome to the Unofficial Palia Companion App!
        </v-card-title>
        <v-card-text class="card-text">
            <div>
				<h1 class="homepage-top-header">Purpose</h1>
				<v-divider class="homepage-divider" :thickness="dividerThickness"></v-divider>
				<p>
					I initally set out to make this as a way to learn some UI development in JavaScript using Vue, but I expanded upon my initial idea and wanted to share it with the community. I do not intend to gain any benefit from anyone's usage or sharing of this page. Just a fun little project that I hope you can benefit from. Hope you all enjoy!
				</p>
				<h1 class="homepage-header">Usage</h1>
				<v-divider class="homepage-divider" :thickness="dividerThickness"></v-divider>
				<p>
					Palia Companion uses cookies. Progress will be saved when using the same device and browser.
				</p>
				<br>
				<p>
					From each page you can track your weekly gifts, collected bugs and fish, and prepared dishes. Most images are buttons, so click around and see how things work! I will update some clearer instructions once more of the app is functional.
				</p>
				<h1 class="homepage-header">New!</h1>
				<v-divider class="homepage-divider" :thickness="dividerThickness"></v-divider>
				<p>
					Everything right now lol
				</p>
				<h1 class="homepage-header">Planned Features</h1>
				<v-divider class="homepage-divider" :thickness="dividerThickness"></v-divider>
				<v-list class="list" tag='ul'>
					<v-list-item v-for="item in plannedFeatures" class="list-item" tag='li'>
						{{ '• ' + item }}
					</v-list-item>
				</v-list>
				<h1 class="homepage-header">Issues</h1>
				<v-divider class="homepage-divider" :thickness="dividerThickness"></v-divider>
				<v-list class="list">
					<v-list-item v-for="item in issues" class="list-item" tag='li'>
						{{ '• ' + item }}
					</v-list-item>
				</v-list>
			</div>
        </v-card-text>
        <v-card-actions class="card-actions">
            <p>
            	This is a fan-made website and is not affiliated with Palia or Singularity 6. <br>
            	This site is maintained by Arraval. For any bug reports or feature requests please open an issue on <a href="https://github.com/CodyC98/PaliaCompanion/issues" target="_blank">github</a>.
        	</p>
        </v-card-actions>
    </v-card>
</template>


<script setup>
	const dividerThickness = 4

	const plannedFeatures = [
		"Allowing tracking of obtained bugs, fish, and dishes",
		"Add details to each collection's items (check out Bahari Crabs!)",
		"Save collection status for users",
		"Addition of furniture collection",
		"Light/Dark mode toggle"
	]

	const issues = [
		"Mobile formatting feels cluttered"
	]
</script>