interface NavigateFunc {
    (navigateTo: string, params?: object, action?: object): void
}

interface GoBackFunc {
    (key?): void
}

interface Payload {
    action: { type: string, key: string },
    context: string,
    lastState: any,
    state: any,
    type: string,
}

interface AddListenerFunc {
    (event: 'willBlur' | 'willFocus' | 'didFocus' | 'didBlur', callback: (payload: Payload) => void): EventListener
}

interface State {
    routeName: string,
    key: string,
    params: object
}

export default interface NavigationProps {
    navigate: NavigateFunc,
    goBack: GoBackFunc,
    addListener: AddListenerFunc,
    isFocused: () => boolean,
    state: State,
    setParams: (params: object) => void,
    getParam: (key: string, defaultValue?: any) => any,
    dispatch: (navigateAction: Function) => void
}

export interface StackNavigation extends NavigationProps {
    pop: (screensBack: number) => void,
    popToTop: () => void,
    replace: (routeName: string, params?: object, action?: object) => void
}
