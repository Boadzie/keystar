<script>
	import { CardBody, El, Card, Textarea, Button, Badge } from 'yesvelte';
	// import { enhance } from '$app/forms';
	export let data;
	const { results } = data;
	const keys = results.split(', ');

	// let loading = false;
</script>

<section class="container mx-auto px-4 lg:px-24 py-14">
	<El tag="h1" class="text-slate-500">Keystar ⭐</El>
	<El tag="p" class="text-lg"
		>Transform your job description into a personalized resume (CV) with tailored keywords for an
		unmatched application experience! <br /> Enter the job details below to receive relevant keywords
		for your CV.
	</El>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center">
		<Card>
			<CardBody>
				<form method="POST" class="m-2">
					<textarea
						class="input rounded-md p-4 ring-0 text-slate-500 placeholder:font-medium w-full min-h-64 mb-4 focus:ring-0 focus:outline-none"
						name="text"
						placeholder="Enter your text here..."
					></textarea>

					<Button type="submit">Submit</Button>
				</form>
			</CardBody>
		</Card>
		<Card class="">
			<CardBody>
				<div class="flex flex-wrap">
					{#if keys}
						{#each keys as key}
							<div>
								<Badge ghost color="dark" class="text-start text-md font-bold m-2">
									{key || ''}
								</Badge>
							</div>
						{/each}
					{/if}
				</div>
			</CardBody>
		</Card>
	</div>
</section>
