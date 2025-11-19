import { test, expect } from '@playwright/test'

test('landing page renders and nav to register', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('a glassy way to deploy')).toBeVisible()
  await page.getByRole('link', { name: 'get started' }).click()
})
