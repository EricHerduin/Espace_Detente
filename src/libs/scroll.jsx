import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      // Force la page à se positionner en haut lorsqu'un lien est cliqué ou qu'un bouton de retour en arrière est utilisé
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default ScrollToTop;
