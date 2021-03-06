export default {
    LOGIN_IN(state, token) {
        state.UserToken = token
    },
    LOGIN_OUT(state) {
        state.UserToken = ''
    },
    toggleNavCollapse(state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
        localStorage.setItem('isSidebarNavCollapse', state.isSidebarNavCollapse)
    },
    SET_TITLE(state, docTitle) {
        state.docTitle = docTitle
        localStorage.setItem('docTitle', state.docTitle)
    },
    SET_WIDTH(state, width) {
        state.dialogWidth = width
    }
}
