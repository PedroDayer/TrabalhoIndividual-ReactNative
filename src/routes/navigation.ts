export type ParametrosRotasStack = {
  StackLogin: undefined;
  StackHome: undefined;
};

export type ParametrosRotasTabs = {
  TabsHome: undefined;
  TabsBuscar: undefined;
  TabsSuaBiblioteca: undefined;
  TabsPremium: undefined;
}


declare global {
  namespace ReactNavigation{
    interface RootParamList extends ParametrosRotasStack {}
    interface RootParamList extends ParametrosRotasTabs {}
  }
}