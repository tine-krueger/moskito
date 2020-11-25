<?php

namespace App\Entity;

use App\Repository\CampsiteFeatureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CampsiteFeatureRepository::class)
 */
class CampsiteFeature
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Campsite::class, inversedBy="campsiteFeatures")
     */
    private $campsite;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $type;

    /**
     * @ORM\Column(type="boolean")
     */
    private $value;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCampsite(): ?Campsite
    {
        return $this->campsite;
    }

    public function setCampsite(?Campsite $campsite): self
    {
        $this->campsite = $campsite;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getValue(): ?bool
    {
        return $this->value;
    }

    public function setValue(bool $value): self
    {
        $this->value = $value;

        return $this;
    }
}
