export interface Database {
  dialect: string;
  host: string;
  username: string;
  password: string;
  database: string;
  define: {
    timestamps: boolean;
    underscored: boolean;
  }
}