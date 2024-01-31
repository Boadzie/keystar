<script>
	import { CardBody, El, Card, FormTextarea, Button, Badge } from 'yesvelte';

	export let data;
	const { results } = data;
	const keys = results.split(', ');
</script>

<section class="container mx-auto lg:px-24 py-4">
	<El tag="h1" class="text-slate-500">Keystar ⭐</El>
	<div class="grid grid-cols-2 gap-4 place-content-center">
		<Card>
			<CardBody>
				<form method="POST">
					<FormTextarea
						class=""
						label="text"
						name="text"
						required
						placeholder="Enter your text here..."
					/>
					<Button type="submit">Submit</Button>
				</form>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<div class="grid grid-cols-4 gap-2 m-4">
					{#each keys as key}
						<div>
							<Badge ghost color="dark" class="text-start text-wrap">
								{key}
							</Badge>
						</div>
					{/each}
				</div>
			</CardBody>
		</Card>
	</div>
</section>
