export function CtaSection2() {
	const beehiveForm = `<iframe src="https://embeds.beehiiv.com/986f76fb-6b14-4b93-ad96-341a3542e1a5?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>`

	return (
		<section className='container'>
			<div className='flex flex-col items-center gap-6 rounded-xl px-6 sm:gap-10 bg-accent py-16'>
				<h3 className='font-bold uppercase text-background'>
					Wanna know the industry secrets?
				</h3>
				<h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance sm:leading-tight text-center text-primary-foreground max-w-2xl">Stay Sharp on Developer Growth</h2>
				<p className='max-w-xl text-lg text-primary-foreground/80 text-center'>Join the newsletter and receive content on developer tool traction in your inbox.</p>
				<div
					className='flex w-full'
					dangerouslySetInnerHTML={{ __html: beehiveForm }}
				/>
			</div>
		</section>
	)
}
