/**
 * Utilitários de navegação resilientes para React Navigation
 * Suporta navegação entre Stack e Tab Navigators sem erros de rotas não manipuladas
 */

export function irParaAba(navigation: any, nomeAba: string, params?: any) {
  if (!navigation) return;

  try {
    // 1. Tenta navegar diretamente pela aba ativa se for Tab Navigator
    const state = navigation.getState ? navigation.getState() : null;
    if (state?.routeNames?.includes(nomeAba)) {
      navigation.navigate(nomeAba, params);
      return;
    }
  } catch {}

  try {
    // 2. Se navigation tiver pai (Stack raiz), navega pela rota Principal
    const parent = navigation.getParent ? navigation.getParent() : null;
    if (parent) {
      parent.navigate('Principal', { screen: nomeAba, params });
      return;
    }
  } catch {}

  try {
    // 3. Tenta pelo Stack 'Principal'
    navigation.navigate('Principal', { screen: nomeAba, params });
    return;
  } catch {}

  try {
    // 4. Fallback direto
    navigation.navigate(nomeAba, params);
  } catch {}
}

export function voltarOuIrParaInicio(navigation: any) {
  if (!navigation) return;

  try {
    if (navigation.canGoBack && navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
  } catch {}

  irParaAba(navigation, 'Início');
}
