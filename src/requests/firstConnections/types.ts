export interface ConnectionElement {
  connectedMemberResolutionResult: ConnectedMember;
  createdAt: number;
  $recipeType: string;
  connectedMember: string;
  entityUrn: string;
}

export interface ConnectedMember {
  lastName: string;
  memorialized: boolean;
  firstName: string;
  profilePicture: ProfilePicture;
  entityUrn: string;
  $recipeType: string;
  headline: string;
  publicIdentifier: string;
}

export interface ProfilePicture {
  $recipeType: string;
  a11yText: string;
  displayImageReference: {
    vectorImage: {
      $recipeType: string;
      rootUrl: string;
      artifacts: ImageReferenceArtifact[];
    };
  };
  displayImageUrn: string;
}

export interface ImageReferenceArtifact {
  width: number;
  $recipeType: string;
  fileIdentifyingUrlPathSegment: string;
  expiresAt: number;
  height: number;
}
