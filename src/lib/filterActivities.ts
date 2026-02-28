import { Activity, activities, EnergyLevel, SpaceRequirement, ActivityType } from '../data/activities';

export interface FilterParams {
  age?: number;
  time?: number; // 5, 10, 15
  space?: SpaceRequirement;
  tiredMode?: boolean;
  type?: ActivityType;
  situation?: string;
}

export function filterActivities(params: FilterParams): Activity[] {
  return activities.filter(activity => {
    // Age filter
    if (params.age !== undefined) {
      if (params.age < activity.ageMin || params.age > activity.ageMax) {
        return false;
      }
    }

    // Time filter
    if (params.time !== undefined) {
      if (params.time === 15) {
        if (activity.durationMax < 15) return false;
      } else {
        if (activity.durationMin > params.time) return false;
      }
    }

    // Space filter
    if (params.space !== undefined) {
      if (activity.space !== params.space) {
        // Allow smaller space activities in larger spaces
        let spaceAllowed = false;
        if (params.space === 'yard' && (activity.space === 'small' || activity.space === 'normal')) {
          spaceAllowed = true;
        }
        if (params.space === 'normal' && activity.space === 'small') {
          spaceAllowed = true;
        }
        
        if (!spaceAllowed) {
          return false;
        }
      }
    }

    // Tired mode filter
    if (params.tiredMode) {
      if (activity.energyLevel !== 'tired' && !activity.tags.includes('Tired-friendly')) {
        return false;
      }
    }

    // Type filter
    if (params.type) {
      if (!activity.types.includes(params.type)) {
        return false;
      }
    }

    // Situation filter
    if (params.situation) {
      if (!activity.situations.includes(params.situation)) {
        return false;
      }
    }

    return true;
  });
}

export function getRandomActivity(filteredActivities: Activity[]): Activity | null {
  if (filteredActivities.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filteredActivities.length);
  return filteredActivities[randomIndex];
}
