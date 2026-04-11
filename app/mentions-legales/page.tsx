
export const metadata = {
  title: 'Mentions Légales | BINOVA ROCKBUILDERS',
  description: 'Mentions légales du site BINOVA ROCKBUILDERS',
}

export default function MentionsLegales() {
  return (
    <>
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Mentions Légales</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 prose prose-sm max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground mb-4">Propriétaire du site</h2>
            <p>
              BINOVA ROCKBUILDERS<br/>
              Lieu....<br/>
              ......<br/>
              .......<br/>
              ........
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Responsable de publication</h2>
            <p>
              Direction générale de BINOVA ROCKBUILDERS<br/>
              mail....
            </p>

            

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Propriété intellectuelle</h2>
            <p>
              Tous les contenus du site (textes, images, graphiques, etc.) sont la propriété exclusive de BINOVA ROCKBUILDERS ou sont utilisés avec l&apos;autorisation de leurs propriétaires respectifs. Toute reproduction ou utilisation sans autorisation écrite est interdite.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Limitation de responsabilité</h2>
            <p>
              Les informations contenues dans ce site sont fournies à titre informatif. BINOVA ROCKBUILDERS décline toute responsabilité concernant l&apos;exactitude, la complétude ou l&apos;utilisation de ces informations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En continuant à naviguer, vous acceptez l&apos;utilisation de cookies.
            </p>
          </div>
        </section>
    </>
  )
}
