"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  className?: string;
}

export function SkillCard({ title, skills, className }: SkillCardProps) {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});

  const handleAnimationStart = (skillName: string) => {
    setAnimatedSkills((prev) => ({ ...prev, [skillName]: true }));
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{skill.name}</p>
              <p className="text-sm text-muted-foreground">
                {animatedSkills[skill.name] ? `${skill.level}%` : "0%"}
              </p>
            </div>
            <Progress 
              value={animatedSkills[skill.name] ? skill.level : 0} 
              className="h-2 transition-all duration-1000 ease-out"
              onMouseEnter={() => handleAnimationStart(skill.name)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}