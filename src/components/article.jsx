import { Link } from "react-router-dom";

export default function ArticleText() {
  return (
    <div className="article__wellfare-resume">
      <h2>Notre gamme de spas : Alliance de technologie et de bien-être</h2>
      <p>
        Les spas sont des lieux de détente et de relaxation très appréciés pour
        leurs bienfaits sur le corps et le bien-être. Parmi les différentes
        formes de spas, les spas Softub sont particulièrement appréciés pour
        leur conception innovante et leurs avantages thérapeutiques. Voici
        quelques-uns des nombreux bienfaits que les spas Softub peuvent offrir à
        votre corps et votre bien-être.{" "}
        <Link to="/bienetre">Lire la suite</Link>
      </p>
    </div>
  );
}

export function ArticleTextComplet() {
  return (
    <div className="article__wellfare">
      <h2>Les bienfaits des spas sur votre corps</h2>
      <p>
        Les spas sont des lieux de détente et de relaxation très appréciés pour
        leurs bienfaits sur le corps et le bien-être. Parmi les différentes
        formes de spas, les spas sont particulièrement appréciés pour leur
        conception innovante et leurs avantages thérapeutiques.
        <br />
        <br />
        Voici quelques-uns des nombreux bienfaits que les spas Softub peuvent
        offrir à votre corps et votre bien-être. Les spas de type Softub sont
        connus pour offrir des bienfaits sur la santé et le bien-être. Ces spas
        offrent une conception innovante et des avantages thérapeutiques uniques
        pour votre corps et votre esprit.
        <br />
        <br />
        Tout d'abord, ces spas peuvent soulager les douleurs corporelles. L'eau
        chaude associée à une pression ajustable permet de soulager la tension
        musculaire, de réduire la douleur et l'inflammation, ainsi que
        d'améliorer la circulation sanguine. Les jets d'eau peuvent être ciblés
        sur les zones douloureuses pour une thérapie ciblée.
        <br />
        <br />
        Ensuite, les spas de type Softub sont également bénéfiques pour la
        relaxation et la réduction du stress. La chaleur et l'hydrothérapie
        aident à détendre les muscles tendus et à libérer les tensions
        corporelles, ce qui aide également à calmer l'esprit. Ils offrent un
        environnement paisible et privé pour se détendre et se ressourcer.
        <br />
        <br />
        De plus, ces spas peuvent aider à améliorer la qualité du sommeil. La
        relaxation et la réduction du stress que procure l'utilisation du spa
        peuvent aider à calmer l'esprit et à favoriser un sommeil plus profond
        et plus réparateur. La chaleur et l'hydrothérapie peuvent également
        aider à soulager l'insomnie et d'autres troubles du sommeil.
        <br />
        <br />
        Enfin, ces spas sont également bénéfiques pour la santé générale de la
        peau. La chaleur et l'hydrothérapie ouvrent les pores de la peau, ce qui
        permet d'éliminer les toxines et les impuretés et d'améliorer la
        circulation sanguine. Cela peut aider à réduire l'apparence des rides et
        à améliorer la texture et la fermeté de la peau.
        <br />
        <br />
        En résumé, les spas de type Softub sont un excellent moyen de soulager
        les douleurs corporelles, de favoriser la relaxation et de réduire le
        stress, d'améliorer la qualité du sommeil et d'améliorer la santé de la
        peau. Ils offrent un environnement paisible et privé pour se détendre et
        se ressourcer. En utilisant régulièrement un spa de type Softub, vous
        pouvez profiter de tous ces bienfaits pour votre corps et votre
        bien-être.
      </p>
    </div>
  );
}
