import { UserQuery, UserInfo, UserAddRequest } from "./types/userTypes";
import request from '@/utils/http'

export const userPageQuery = (data: UserQuery) => {
  return request.post<UserQuery, UserInfo>('user/pageQuery', data)
};

export const userAdd = (data: UserAddRequest) => {
  return request.post<UserAddRequest, void>('user/add', data)
}