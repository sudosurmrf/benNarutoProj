import api from '../../store/api';

const characterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCharacters: build.query({
      query: () => '/character',
      providesTags: ['Characters'],
      transformResponse: (response) => response.characters,
      transformErrorResponse: (error) => error,
    }),
    getCharacter: build.query({
      query: (id) => `/character/${id}`,
      providesTags: ['Characters'],
      transformResponse: (response) => response.characters,
      transformErrorResponse: (error) => error,
    }),
  })
});

export const {
  useGetAllCharactersQuery,
  useGetCharacterQuery,
} = characterApi;

