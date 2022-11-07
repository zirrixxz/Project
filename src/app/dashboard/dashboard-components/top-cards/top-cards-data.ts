export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-emoji-smile',
        title: '20',
        subtitle: 'Well Being'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-emoji-neutral',
        title: '53',
        subtitle: 'normal'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-emoji-frown',
        title: '4',
        subtitle: 'Depression'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-people-fill',
        title: '210',
        subtitle: 'Over all'
    },

] 