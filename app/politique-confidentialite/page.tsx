
export const metadata = {
  title: 'Politique de Confidentialité | BINOVA ROCKBUILDERS',
  description: 'Politique de confidentialité de BINOVA ROCKBUILDERS',
}

export default function PolitiqueConfidentialite() {
  return (
    <>
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Politique de Confidentialité</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 prose prose-sm max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable du traitement</h2>
            <p>
              BINOVA ROCKBUILDERS<br/>
              mail......<br/>
              Lieu........
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Données collectées</h2>
            <p>
              Nous collectons les données suivantes lorsque vous utilisez notre site:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Données d&apos;identification (nom, email, téléphone)</li>
              <li>Données de navigation (adresse IP, pages visitées)</li>
              <li>Données de formulaire (demandes de devis, messages)</li>
              <li>Données de cookies et traceurs</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Finalités du traitement</h2>
            <p>
              Vos données sont traitées pour:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Répondre à vos demandes de contact et devis</li>
              <li>Améliorer notre service et votre expérience</li>
              <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Base légale</h2>
            <p>
              Le traitement de vos données est basé sur:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Votre consentement</li>
              <li>L&apos;exécution de contrats</li>
              <li>Nos obligations légales</li>
              <li>Nos intérêts légitimes</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Destinataires des données</h2>
            <p>
              Vos données peuvent être partagées avec:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Nos employés et équipes</li>
              <li>Nos prestataires (hébergement, email)</li>
              <li>Les autorités publiques si obligatoire</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Durée de conservation</h2>
            <p>
              Vos données sont conservées:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Pour les demandes de devis: 3 ans</li>
              <li>Pour les messages de contact: 1 an</li>
              <li>Pour les cookies: selon votre consentement</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">7. Vos droits RGPD</h2>
            <p>
              Vous avez le droit de:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Accéder à vos données</li>
              <li>Rectifier vos données</li>
              <li>Supprimer vos données</li>
              <li>Vous opposer au traitement</li>
              <li>Porter plainte auprès de la CNIL</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">8. Contact</h2>
            <p>
              Pour exercer vos droits ou obtenir plus d&apos;informations:
            </p>
            <p>
              mail......<br/>
              Lieu........
            </p>
          </div>
        </section>
    </>
  )
}
