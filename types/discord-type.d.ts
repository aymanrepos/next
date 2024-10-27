interface OAuthGuild {
  id: string;              // The guild ID
  name: string;            // The name of the guild
  icon: string | null;     // The icon hash of the guild, if it has one
  owner: boolean;          // Whether the current user is the owner of the guild
  permissions: string;     // The permissions the user has in this guild (as a permission bitfield)
  features: string[];      // An array of guild features (such as "ANIMATED_ICON", "INVITE_SPLASH", etc.)
  permissions_new : string;
}

