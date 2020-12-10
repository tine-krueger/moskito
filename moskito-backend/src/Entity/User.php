<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=60)
     *
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=160)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=60)
     * @Assert\NotBlank
     * @Assert\Email(
     *      message = "The email '{{ value }}' is not a valid email"
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Regex( pattern="/\d/", message = "Your password must contain at least one number.")
     * @Assert\Regex( pattern="/[a-zA-Z]/", message = "Your password must contain at least one letter.")
     * @Assert\Regex( pattern="/\W/", message = "Your password must contain at least one special character.")
     * @Assert\Length( min=8, max=255, minMessage = "Your password must be at least {{ limit }} characters long.", maxMessage = "Your password can not be longer than {{ limit }} characters.")
     */
    private $password;

    /**
     * @ORM\ManyToMany(targetEntity=Campsite::class, inversedBy="users")
     */
    private $campsite;

    /**
     * @ORM\OneToMany(targetEntity=UserToken::class, mappedBy="user", orphanRemoval=true)
     */
    private $userTokens;

    public function __construct()
    {
        $this->campsite = new ArrayCollection();
        $this->userTokens = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return Collection|Campsite[]
     */
    public function getCampsite(): Collection
    {
        return $this->campsite;
    }

    public function addCampsite(Campsite $campsite): self
    {
        if (!$this->campsite->contains($campsite)) {
            $this->campsite[] = $campsite;
        }

        return $this;
    }

    public function removeCampsite(Campsite $campsite): self
    {
        $this->campsite->removeElement($campsite);

        return $this;
    }

    /**
     * @return Collection|UserToken[]
     */
    public function getUserTokens(): Collection
    {
        return $this->userTokens;
    }

    public function addUserToken(UserToken $userToken): self
    {
        if (!$this->userTokens->contains($userToken)) {
            $this->userTokens[] = $userToken;
            $userToken->setUser($this);
        }

        return $this;
    }

    public function removeUserToken(UserToken $userToken): self
    {
        if ($this->userTokens->removeElement($userToken)) {
            if ($userToken->getUser() === $this) {
                $userToken->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return (Role|string)[] The user roles
     */
    public function getRoles()
    {
    return array('ROLE_USER');
    }

    /**
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
    return null;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
        
    }  

    public function getUsername() {}

}