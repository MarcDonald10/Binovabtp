
export const metadata = {
  title: 'Conditions d\'Utilisation | BINOVA ROCKBUILDERS',
  description: 'Conditions d\'utilisation du site BINOVA ROCKBUILDERS',
}

export default function ConditionsUtilisation() {
  return (
    <>
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Conditions d&apos;Utilisation</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 prose prose-sm max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Objet</h2>
            <p>
              Les présentes conditions régissent l&apos;accès et l&apos;utilisation du site www.binova-rockbuilders.com.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant ce site, vous acceptez de respecter intégralement ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Disponibilité du service</h2>
            <p>
              BINOVA ROCKBUILDERS s&apos;efforce de maintenir le site disponible 24h/24. Cependant, nous ne garantissons pas une disponibilité sans interruption. Nous nous réservons le droit de suspendre ou modifier le service à tout moment.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Contenu utilisateur</h2>
            <p>
              Vous êtes responsable de tout contenu que vous soumettez via le site. Vous garantissez que ce contenu n&apos;enfreint pas les droits de tiers et n&apos;est pas illégal ou offensant.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Propriété intellectuelle</h2>
            <p>
              Tous les contenus du site (textes, images, designs, codes) sont la propriété exclusive de BINOVA ROCKBUILDERS. Vous ne pouvez pas reproduire, distribuer ou modifier ces contenus sans autorisation écrite.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Limitation de responsabilité</h2>
            <p>
              BINOVA ROCKBUILDERS ne peut être tenu responsable de:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Les erreurs ou inexactitudes du site</li>
              <li>Les dommages causés par la consultation du site</li>
              <li>Les interruptions de service</li>
              <li>Les pertes de données</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">7. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. BINOVA ROCKBUILDERS n&apos;est pas responsable du contenu de ces sites externes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">8. Modifications des conditions</h2>
            <p>
              BINOVA ROCKBUILDERS se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur immédiatement après leur publication sur le site.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">9. Loi applicable</h2>
            <p>
              Ces conditions sont régies par la loi française. Tout litige relatif au site sera soumis aux tribunaux français.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">10. Contact</h2>
            <p>
              Pour toute question concernant ces conditions:
            </p>
            <p>
              mail....<br/>
              Tel .....
            </p>
          </div>
        </section>
    </>
  )
}
