export class InventoryPage {
    async assertUserIsLoggedIn(){
        await page.waitForSelector('.inventory_list')
    }
}