<?php

namespace App\Entity;

use App\Repository\CampsiteFeatureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CampsiteFeatureRepository::class)
 */
class CampsiteFeature
{

    const TYPE_WLAN = "kein WLAN";
    const TYPE_MUSIC = "keine Bar oder Diskothek";
    const TYPE_ANIMATION = "keine Animation";
    const TYPE_FIRE = "Lagerfeuerstelle";
    const TYPE_PATH = "Sand- oder Kieswege";
    const TYPE_BULLI = "Bulli-Wiese";
    const TYPE_TENTS = "Zeltplätze";
    const TYPE_SUBDEVISION = "keine Parzellierung";
    const TYPE_PERMANENT = "keine/wenig Dauercamper";
    const TYPE_SIZE = "Standplatzgröße mind. 80qm";
    const TYPE_BIO = "regionale/Bio-Lebensmittel";
    const TYPE_SNACK = "Imbiss";
    const TYPE_ANIMALS = "Haustiere erlaubt";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Campsite::class, inversedBy="campsiteFeatures", cascade={"persist", "remove" })
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
