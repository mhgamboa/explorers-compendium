export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      encounter_stats: {
        Row: {
          conditions: string[]
          current_hp: number
          encounter_id: number
          id: number
          monster_id: number | null
          player_id: number | null
          rolled_initiative: number
          user_id: string
          wave: number | null
        }
        Insert: {
          conditions: string[]
          current_hp: number
          encounter_id: number
          id?: number
          monster_id?: number | null
          player_id?: number | null
          rolled_initiative?: number
          user_id: string
          wave?: number | null
        }
        Update: {
          conditions?: string[]
          current_hp?: number
          encounter_id?: number
          id?: number
          monster_id?: number | null
          player_id?: number | null
          rolled_initiative?: number
          user_id?: string
          wave?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "encounter_stats_encounter_id_fkey"
            columns: ["encounter_id"]
            isOneToOne: false
            referencedRelation: "encounters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "encounter_stats_monster_id_fkey"
            columns: ["monster_id"]
            isOneToOne: false
            referencedRelation: "monsters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "encounter_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      encounters: {
        Row: {
          id: number
          name: string
          user_id: string
        }
        Insert: {
          id?: number
          name: string
          user_id: string
        }
        Update: {
          id?: number
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      monsters: {
        Row: {
          ac_notes: string | null
          ac_value: number
          actions: Json
          cha: number
          challenge: string | null
          con: number
          condition_immunities: string[]
          damage_immunities: string[]
          damage_resistances: string[]
          damage_vulnerabilities: string[]
          description: string | null
          dex: number
          hp_notes: string | null
          hp_value: number
          id: number
          int: number
          languages: string[]
          name: string
          saves: Json[] | null
          senses: string[]
          skills: Json
          source: string
          speed: string[]
          str: number
          tags: string[]
          traits: Json | null
          type: string
          user_id: string | null
          wis: number
        }
        Insert: {
          ac_notes?: string | null
          ac_value: number
          actions: Json
          cha?: number
          challenge?: string | null
          con?: number
          condition_immunities: string[]
          damage_immunities: string[]
          damage_resistances: string[]
          damage_vulnerabilities: string[]
          description?: string | null
          dex?: number
          hp_notes?: string | null
          hp_value: number
          id?: number
          int?: number
          languages: string[]
          name: string
          saves?: Json[] | null
          senses: string[]
          skills: Json
          source: string
          speed: string[]
          str?: number
          tags: string[]
          traits?: Json | null
          type: string
          user_id?: string | null
          wis?: number
        }
        Update: {
          ac_notes?: string | null
          ac_value?: number
          actions?: Json
          cha?: number
          challenge?: string | null
          con?: number
          condition_immunities?: string[]
          damage_immunities?: string[]
          damage_resistances?: string[]
          damage_vulnerabilities?: string[]
          description?: string | null
          dex?: number
          hp_notes?: string | null
          hp_value?: number
          id?: number
          int?: number
          languages?: string[]
          name?: string
          saves?: Json[] | null
          senses?: string[]
          skills?: Json
          source?: string
          speed?: string[]
          str?: number
          tags?: string[]
          traits?: Json | null
          type?: string
          user_id?: string | null
          wis?: number
        }
        Relationships: []
      }
      players: {
        Row: {
          ac: number | null
          character_name: string | null
          class: string | null
          id: number
          level: number | null
          passive_perception: number | null
          player_id: string | null
          player_name: string | null
          total_hp: number | null
          user_id: string
        }
        Insert: {
          ac?: number | null
          character_name?: string | null
          class?: string | null
          id?: number
          level?: number | null
          passive_perception?: number | null
          player_id?: string | null
          player_name?: string | null
          total_hp?: number | null
          user_id: string
        }
        Update: {
          ac?: number | null
          character_name?: string | null
          class?: string | null
          id?: number
          level?: number | null
          passive_perception?: number | null
          player_id?: string | null
          player_name?: string | null
          total_hp?: number | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
