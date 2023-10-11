export const formatCurrency = (value) => {
    return value.toLocaleString('pt-AR', { style: 'currency', currency: 'ARS' });
}