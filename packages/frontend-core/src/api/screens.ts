import { Screen } from "@budibase/types"
import { BaseAPIClient } from "./types"

export interface ScreenEndpoints {
  saveScreen: (screen: Screen) => Promise<Screen>
  deleteScreen: (id: string, rev: string) => Promise<{ message: string }>
}

export const buildScreenEndpoints = (API: BaseAPIClient): ScreenEndpoints => ({
  /**
   * Saves a screen definition
   * @param screen the screen to save
   */
  saveScreen: async screen => {
    return await API.post({
      url: "/api/screens",
      body: screen,
    })
  },

  /**
   * Deletes a screen.
   * @param id the ID of the screen to delete
   * @param rev the rev of the screen to delete
   */
  deleteScreen: async (id, rev) => {
    return await API.delete({
      url: `/api/screens/${id}/${rev}`,
    })
  },
})
