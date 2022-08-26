import styled from '@emotion/styled';

export const SectionCommon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 60%;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
`;
