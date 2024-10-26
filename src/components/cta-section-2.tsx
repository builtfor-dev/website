export function CtaSection2() {
	const beehiveForm = `<iframe src="https://embeds.beehiiv.com/986f76fb-6b14-4b93-ad96-341a3542e1a5" data-test-id="beehiiv-embed" width="100%" height="320" frameborder="0" scrolling="no" style="border-radius: 4px; border: 2px solid #e5e7eb; margin: 0; background-color: transparent;"></iframe>`

	return (
		<section className='container'>
			<div className='flex flex-col items-center gap-6 rounded-xl px-6 sm:gap-10 bg-accent py-16'>
				<h3 className='font-bold uppercase text-background'>
					Wanna know the industry secrets?
				</h3>
				<div
					className='flex w-full'
					dangerouslySetInnerHTML={{ __html: beehiveForm }}
				/>
			</div>
		</section>
	)
}
