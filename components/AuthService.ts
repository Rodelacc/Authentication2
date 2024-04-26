import BaseAPIService from "./BaseAPIService";

class AuthService extends BaseAPIService {
  async login(params: object): Promise<any> {
    return await this.request(`/user/login`, "POST", params);
  }
  async logout(): Promise<any> {
    return await this.request(`/user/logout`, "GET");
  }

  async forgotPassword(params: object): Promise<any> {
    return await this.request(`/user/forgot-password`, "POST", params);
  }

  async verifyResetPassword(params: object): Promise<any> {
    return await this.request(`/user/verify-reset-password`, "POST", params);
  }

  async resetPassword(params: object): Promise<any> {
    return await this.request(`/user/reset-password`, "POST", params);
  }
}

export const authService = new AuthService();
